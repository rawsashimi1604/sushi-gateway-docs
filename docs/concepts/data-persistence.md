# Data Persistence Modes in Sushi Gateway

Sushi Gateway supports two primary data persistence modes: **Stateless** and **Stateful**. These modes determine how configurations are managed and stored, providing flexibility based on deployment needs.

## Stateless Mode

In Stateless Mode, configurations are provided as declarative files, such as `config.json`. This mode does not require a database, making it ideal for:

- Testing and development environments.
- Scenarios with fixed configurations that do not require frequent updates.

To configure Stateless Mode, set the following environment variable:

::: tip
For a full reference of configuration options and environment variables, see the **[Configuration Reference Guide](../reference/configuration.md)**.
:::

```bash
PERSISTENCE_CONFIG=dbless
```

### Key Features

- Simple setup with configuration files.
- Lightweight and fast.
- GitOps-friendly workflows for managing version-controlled configurations.

Example:

```bash
docker run \
  --rm \
  -v $(pwd)/config.json:/app/config.json \
  -e CONFIG_FILE_PATH=/app/config.json \
  -e PERSISTENCE_CONFIG=dbless \
  rawsashimi/sushi-proxy:latest
```

## Stateful Mode

Stateful Mode leverages a database to persist configurations and runtime data. This mode is suitable for:

- Production environments.
- Deployments requiring dynamic updates to configurations.
- High availability and resilience.

### Database Connection Configuration

For Stateful Mode, you need to specify database connection settings and additional options using environment variables. Sushi Gateway supports databases like PostgreSQL and MySQL.

Set the following environment variables:

```bash
PERSISTENCE_CONFIG=db
PERSISTENCE_SYNC_INTERVAL=5
DB_CONNECTION_HOST=<database_host>
DB_CONNECTION_PORT=<database_port>
DB_CONNECTION_NAME=<database_name>
DB_CONNECTION_USER=<database_user>
DB_CONNECTION_PASS=<database_password>
```

- **`PERSISTENCE_SYNC_INTERVAL`**: Specifies how often (in seconds) the database should sync with the in-memory configuration.

### Example Configuration for PostgreSQL

```bash
docker run \
  --rm \
  -e PERSISTENCE_CONFIG=database \
  -e PERSISTENCE_SYNC_INTERVAL=5 \
  -e DB_CONNECTION_HOST=localhost \
  -e DB_CONNECTION_PORT=5432 \
  -e DB_CONNECTION_NAME=sushi \
  -e DB_CONNECTION_USER=postgres \
  -e DB_CONNECTION_PASS=mysecretpassword \
  rawsashimi/sushi-proxy:latest
```

### Key Features

- Persistent storage of configurations.
- Support for dynamic updates without restarting the gateway.
- Ensures resilience in distributed environments.

## Switching Between Modes

To switch between Stateless and Stateful modes, update the `PERSISTENCE_CONFIG` environment variable:

- Use `dbless` for Stateless Mode.
- Use `db` for Stateful Mode with the required database connection variables.

## Comparison of Persistence Modes

| Feature                | Stateless Mode          | Stateful Mode           |
| ---------------------- | ----------------------- | ----------------------- |
| Configuration Storage  | File-based (e.g., JSON) | Database-based          |
| Dynamic Updates        | No                      | Yes                     |
| Database Sync Interval | N/A                     | Configurable (e.g., 5s) |
| Setup Complexity       | Low                     | Medium                  |
