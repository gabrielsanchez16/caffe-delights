# Ruta al directorio de tu proyecto
PROYECTO_DIR="" #ruta del proyecto en el servidor

# Traer el último commit desde GitHub
git pull origin main  # Asegúrate de cambiar 'main' por la rama correspondiente si es diferente

# Refrescar el proceso de pm2
pm2 reload all