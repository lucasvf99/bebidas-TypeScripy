1. instalar los paquetes de react, npm i 
2. instalar tailwindcss 
3. importar tailwindcss en vite.config.ts
4. llamar a tailwind en plugins
5. importar tailwind en archivo css @import "tailwindcss"
6. intalar react-router-dom
7. crear componente de pages o views 
8. crear el header
9. crear layout principal (header footer etc)
10. ir a router y envolver las rutas con mi layout principal
11. importar Outlet en layout y header
12. agregar navLink y Link en mi nav
13. navLink tiene un callback que permite cambiar de propiedad si estas en la pagina actual 
14. utilizando useLocation podemos ver el path en el que nos encontramos
15. mostrar formulario si el path es '/'
16. agregamos foto de bg, en el header con codigo js 
17. ZUSTAND => multiples store o Slice Pattern(dividir tu store en pequeñas partes)
18. crear carpeta stores y sus archivos 
19. useAppStore contiene los slice
20. recipeslice estado, recipeService obtiene categorias
21. intalar zod y axios
22. crear schema 
23. validar respuesta con el schema 
24. crear type para categorias con zod infer 
25. agregar devtools en useAppStore 
26. hacer un state en header, para guardas los cambios de los input 
27. crear funciones handleChange y handleSubmit(con su validacion de campos)
28. crear funcion de buscar recetas (en recipeSlice y RecipeServis)
29. crear schema de recipes

<!-- RESUMEN DE LLAMADOS A API -->
creo mi useAppStore y creo mi store, dentro de esa funcion tomo una copia de mis slice(Slice Pattern), mi recipeSlice contiene mis estados y los llamados a las api, pero las funciones las tengo separadas en el archivo RecipeService, ahi hago los llamados a las API, en esas funciones tengo que valida las respuesta con mis schema antes hechos 
<!--  --------------------------  -->

30. le pasamos a la funcion de searchRecipes el argumento de searchFilters, hay que agregarlo al type de mi state
31. una vez hecho los schemas y inferirlo a la respuesta, tenemos que mostrar los datos de los Drinks
32. utilizar useMemo para comproba si hay cambios, queremos mostrar las recetas una vez que haya algo con drinks.lenght basta
33. Crear el componente DrinkCard y mostrar los tragos 
34. captar el id con el boton ver recetas, abrir un modal y mostrar la receta 
35. crar la funcion en recipeSlice que tome como parametro el id 
<!-- 
    en schema el nullable significa: puede que este ese dato o no 
 -->
36. hacer schema de la recetaç
37. agregarlo al state 
38. descargar headlessui, el state del modal tiene que ser global, tiene que estar en recipeSlice 
39. crear la funcion de cerrar modal dentro del recipeSlice, al cerrar modal vaciar las recetas 
40. crear funcion que itere los ingredientes y recetas correctas

<!-- Se necesita unir tanto ingredientes como medidas, se crea una iteracion para las recetas -->

41. agregar botones de cerrar y añadir a favoritos 
42. Crear el slice para favoritos 
43. crear funciones para dichos botones
44. Conectar el slice a AppStore, importar el type y la funcion
45. crear la funcion agregar a favoritos, con el argumento get obtenemos el state o la acciones dentro de mi slice 
46. Crear funcion de si existe en favoritos cambiar el texto del boton 

<!-- 
    Podemos usae una funcion del state dentro de otro state 
    ej en favoriteSlice, handleClickFavorite y favoritesExist
 -->
 47. al agregar o eliminar de favoritos, tenemos que cerrar modal, pero necesitamos consumir el estado de otro slice o agregar la funcion closeModal en la funcion del boton  
48. setear los datos a localStorage 
49. agregar los datos del storage a mi state (al recargar la pagina se pierde los datos de mi state, pero quedan guardados en el storage), cargar los datos dentro del layout
50. mostrar las recetas en la pagina de favoritos
51. utilizar use memo si hay recetas mostrarlas si no mostrar un parrafo 
52. crear slice para notificaciones, crear componente 
53. importarlo en el layout
54. tenemos usar el state de otro slice para llamar a la notificacion 
<!-- 
    Para mejorar el peformance, si hacemos npm build solo se crea un archivo de js, hace que la pagina de inicio sea aun mas pesada 
 -->
55. importar lazy y Suspense en router 