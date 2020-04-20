$(document).ready(function () {

    $('.agregar-servicio')
        // Reciba un 'click'
        .on(
            'click',
            // Ejecutar la siguiente función
            function () {
                // Aquí no hace falta usar el e.preventDefault, porque es un botón que al
                // hacerle click no tiene un comportamiento por defecto, salvo que sea un
                // botón con type="submit"

                // Guardo en una variable el elemento a clonar
                var lementoAPagar = `
              <li class="list-group-item">
                <article class="d-flex justify-content-between p-2 bd-highlight">
                  <div class="text-uppercase tax-name">ECOGAS</div>
                  <div class="tax-price">$592</div>
                  <div class="servicio__precio">Vto. 28-04-20</div>
                  <div class="tax-action">
                    <a href="#" class="btn btn-info text-uppercase">pagar</a>
                  </div>
                </article>
              </li>
            `;
                $('.servicios-impagos').append(lementoAPagar);
            },
        );
    // Fin función Clonar Elemento
});
    // Fin función DocumentReady
