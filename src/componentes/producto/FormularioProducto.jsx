import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { buscarProductoAPI, crearProductoApi, editarProductoApi } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioProducto = ({ titulo, creandoProducto }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (!creandoProducto) {
      cargarProducto();
    }
  }, []);

  const cargarProducto = async () => {
    //buscar el producto de la API
    const respuesta = await buscarProductoAPI(id);
    if (respuesta.status === 200) {
      const productoEncontrado = await respuesta.json();
      console.log(productoEncontrado);
      //cargar los datos en el formulario
      setValue("nombreProducto", productoEncontrado.nombreProducto);
      setValue("precio", productoEncontrado.precio);
      setValue("imagen", productoEncontrado.imagen);
      setValue("categoria", productoEncontrado.categoria);
      setValue("descripcion_breve", productoEncontrado.descripcion_breve);
      setValue("descripcion_amplia", productoEncontrado.descripcion_amplia);
    } else {
       Swal.fire({
         title: "Ocurrio un error",
         text: `No se pudo obtener el producto, intente esta operacion en unos minutos`,
         icon: "error",
       });
    }
  };

  const onSubmit = async (producto) => {
    if (creandoProducto) {
      console.log(producto);
      //pedir a la api crear el producto
      const respuesta = await crearProductoApi(producto);
      if (respuesta.status === 201) {
        //mostrar un cartel afirmativo al usuario
        reset();
        Swal.fire({
          title: "El producto fue creado correctamente",
          text: `El producto ${producto.nombreProducto},fue creado correctamente`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo crear el producto ${producto.nombreProducto}, intente esta operacion en unos minutos`,
          icon: "error",
        });
      }
    } else {
      //enviar el producto a la API
      //mostramos el mensaje que todo salio bien
      const respuesta = await editarProductoApi(producto, id);
      if(respuesta.status === 200){
        Swal.fire({
          title: "Producto Editado",
          text: `El producto ${producto.nombreProducto},fue editado correctamente`,
          icon: "success",
        });
        //redireccionar al admin
        navegacion('/administrador')
      }else{
         Swal.fire({
           title: "Ocurrio un error",
           text: `El producto ${producto.nombreProducto},no pudo ser editado. Intente esta operacion en unos minutos`,
           icon: "error",
         });
      }
    }
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracacteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: {
                value: 50,
                message: "El precio mini debe ser de $50 en adelante",
              },
              max: {
                value: "20000",
                message: "El precio maximo debe ser $20000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen debe ser obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message:
                  "Debe ingresar una url de imagen valida, los formatos admitivos son (jpg|jpeg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {" "}
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="infusiones">Infusiones</option>
            <option value="batidos">Batidos</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve es obligatoria",
              minLength: {
                value: 5,
                message:
                  "La decripcion breve debe contener al menos 5 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "La descripcion breve debe contener como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es obligatoria",
              minLength: {
                value: 10,
                message:
                  "La decripcion amplia debe contener al menos 10 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "La descripcion amplia debe contener como maximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
