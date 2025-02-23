set export

NOTION_TOKEN := "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"
DATABASE_ID := "1a25da7cb53e80c49fb1e2168d1b5a4a"
API_HOST := "https://api.notion.com/v1"


default:
  just --list

inst:
  echo "Installing..."
  pnpm install

dev:
  just inst
  echo "Building..."
  pnpm run dev

build:
  just inst
  echo "Building..."
  echo $NOTION_TOKEN
  pnpm run build
