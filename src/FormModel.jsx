

export const FormModel = () => {
  return (
    <section>
    <form class="bg-success text-center p-3 text-light">
      <div class="form-group">
        <label for="exampleInputEmail1" class="mb-2"
          >Recibe ofertas de hospedaje en tu correo</label>
        <input
          type="text"
          class="form-control mb-4 container"
          id="formGroupExampleInput"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div class="form-group"></div>
      <input
        type="email"
        class="container form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Ingresa tu mail"
      />
      <button type="submit" class="btn btn-light mt-4">Enviar</button>
    </form>
  </section>
  )
}
