# Deploying on Coolify

This repo is set up for Dockerfile-based deployment in Coolify.

## Recommended deployment mode

Use **Dockerfile** mode (not Nixpacks).

- Build context: repository root
- Dockerfile path: `Dockerfile`
- Port: `8000`

The image supports `PORT` and will default to `8000`.

## Persistent storage

Pokémon Showdown writes runtime data to these paths:

- `/app/config`
- `/app/logs`
- `/app/databases`

In Coolify, add persistent volumes for those paths so data survives redeploys.

## First boot behavior

If `/app/config/config.js` does not exist, container startup now auto-creates it from an image-baked template.

After first boot, edit `/app/config/config.js` in your mounted volume to customize server settings.

## Minimal Coolify setup steps

1. Create a new application from this repository.
2. Select **Dockerfile** build pack.
3. Set exposed/internal port to `8000`.
4. Add volumes:
   - `/app/config`
   - `/app/logs`
   - `/app/databases`
5. Deploy.

## Optional: compose deployment

If you prefer Docker Compose mode, use `docker-compose.coolify.yml`.
It includes named volumes for `config`, `logs`, and `databases`.
