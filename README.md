#Flujo de trabajo con Git

A continuación se detalla el flujo de trabajo recomendado para colaborar en este proyecto utilizando Git y GitHub.

1. Clonar el repositorio
   
Para comenzar a colaborar en el proyecto, sigue estos pasos para clonar el repositorio en tu máquina local

despues de estar en la carpeta donde quieres clonar el repositorio:

git clone https://github.com/miguelArboleda28/ProyectWP.git

2. Crear una rama de trabajo
   
Antes de empezar a trabajar en una nueva funcionalidad o arreglo de errores, crea una nueva rama para tus cambios. Utiliza un nombre descriptivo que refleje el propósito de tus cambios:

git checkout -b nombre_de_tu_rama

3. Inicia en visual estudio code el repositorio:

despues de estar en la direccion desde el comando del pc, por ejemplo

arbol@MIGUEL-63539NAI MINGW64 ~/desktop/Programacion Web/ProyectWP

pones el comando:

code .

4. Realizar cambios y hacer commits
   
Realiza tus cambios en el código y haz commits regularmente para guardar tu progreso. Asegúrate de seguir las mejores prácticas de mensajes de commit:

git add .
git commit -m "Descripción clara y concisa de tus cambios"

4. Sincronizar con el repositorio remoto
   
Antes de fusionar tus cambios con la rama principal (main), sincroniza tu rama local con el repositorio remoto para asegurarte de tener la última versión del código:

git fetch origin
git rebase origin/main

5. Fusionar cambios en la rama principal
   
Una vez que tus cambios estén completos y probados, es hora de fusionarlos con la rama principal (main). Primero, asegúrate de haber sincronizado tu rama local con el repositorio remoto (paso 4). Luego, realiza la fusión:

git checkout main

git merge nombre_de_tu_rama

6. Enviar cambios al repositorio remoto
   
Finalmente, después de fusionar tus cambios con la rama principal, envía los cambios al repositorio remoto en GitHub:

git push origin main
