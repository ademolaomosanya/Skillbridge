import neo4j, { Driver } from "neo4j-driver";

const globalForNeo4j = globalThis as unknown as {
  neo4jDriver?: Driver;
};

export function getNeo4jDriver() {
  if (globalForNeo4j.neo4jDriver) {
    return globalForNeo4j.neo4jDriver;
  }

  const uri = process.env.NEO4J_URI;
  const username = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;

  if (!uri || !username || !password) {
    throw new Error("Neo4j environment variables are not configured");
  }

  globalForNeo4j.neo4jDriver = neo4j.driver(uri, neo4j.auth.basic(username, password));

  return globalForNeo4j.neo4jDriver;
}

export async function getSkillRoadmap(skillId: string) {
  const driver = getNeo4jDriver();
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH path = (start:Skill {id: $skillId})-[:REQUIRES*0..4]->(dependency:Skill)
      RETURN nodes(path) AS nodes
      LIMIT 10
      `,
      { skillId },
    );

    return result.records.map((record) =>
      record.get("nodes").map((node: { properties: Record<string, unknown> }) => node.properties),
    );
  } finally {
    await session.close();
  }
}
