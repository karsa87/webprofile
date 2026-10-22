#!/usr/bin/env bash

# ==============================================================================
# Script Deploy Asrakit: Hapus Folder Tujuan KECUALI 'cgi-bin' dan 'Sites'
# ==============================================================================

set -e # Berhenti jika ada error fatal

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

SOURCE_DIR="${1:-dist}"
TARGET_DIR="${2:-../../../public_html}"

echo -e "${YELLOW}=== PROSES DEPLOY ASRAKIT ===${NC}"
echo "Sumber : $SOURCE_DIR"
echo "Tujuan : $TARGET_DIR"

# 1. Validasi: Pastikan folder sumber ada
if [ ! -d "$SOURCE_DIR" ]; then
  echo -e "${RED}Error: Folder sumber '$SOURCE_DIR' tidak ditemukan!${NC}"
  echo "Jalankan 'npm run build' terlebih dahulu."
  exit 1
fi

# 2. Validasi keamanan: Cegah salah hapus root atau path berbahaya
if [ -z "$TARGET_DIR" ] || [ "$TARGET_DIR" = "/" ] || [ "$TARGET_DIR" = "." ]; then
  echo -e "${RED}Error: Target folder tidak valid demi keamanan sistem!${NC}"
  exit 1
fi

# 3. Buat target folder jika belum ada
mkdir -p "$TARGET_DIR"

# 4. Hapus isi folder tujuan KECUALI 'cgi-bin' dan 'Sites'
echo -e "${YELLOW}1. Membersihkan file lama di $TARGET_DIR (menjaga 'cgi-bin' dan 'Sites')...${NC}"
find "$TARGET_DIR" -mindepth 1 -maxdepth 1 \
  ! -name 'cgi-bin' \
  ! -name 'Sites' \
  -exec rm -rf {} +

# 5. Salin seluruh isi build baru (termasuk .htaccess & folder profile/)
echo -e "${YELLOW}2. Menyalin file baru dari $SOURCE_DIR ke $TARGET_DIR...${NC}"
cp -a "$SOURCE_DIR"/. "$TARGET_DIR"/

echo -e "${GREEN}=== DEPLOY BERHASIL! ===${NC}"
echo -e "Folder ${GREEN}cgi-bin${NC} dan ${GREEN}Sites${NC} tetap aman terjaga."
echo -e "Seluruh file baru dan file .htaccess berhasil disalin ke $TARGET_DIR."
