<template>
				<div class="card-header text-center display-4">
					Buscador de tickets aéreos
				</div>
				<div class="card-body">
					<form>
						<div class="form-row">
							<div class="form-group col-md-12">
								<label for="hometown">Ciudad de origen</label>
								<select id="hometown" class="form-control">
									<option>Seleccione</option>
                                    <option v-for="city in hometowns" :key="city">
                                        {{city}}
                                    </option>
								</select>
							</div>
							<div class="form-group col-md-12">
								<label for="destinationcity">Ciudad de destino</label>
								<select id="destinationcity" class="form-control">
									<option>Seleccione</option>
									<option v-for="city in destinationcities" :key="city">
                                        {{city}}
                                    </option>
								</select>
							</div>
						</div>
						<div class="form-row">
					
							<div class="form-group col-md-12">
								<label for="inputState">Fecha de salida</label>
                                <input
                                    type="date"
                                    class="form-control"
                                    v-model="form.departuredate"
                                />
							</div>
					
							<div class="form-group col-md-12">
								<label for="inputState">Fecha de retorno</label>
								<input
                                    type="date"
                                    class="form-control"
                                    v-model="form.returndate"
                                />
							</div>
						</div>
						<button type="submit" class="btn btn-primary btn-lg btn-block">Buscar</button>
					</form>
				</div>
</template>

<script>
    import { ref } from "vue";

export default {
  name: "Search",

  data() {
    const hometown = ref('');
    const destinationcity = ref('');
    const departuredate = ref('');
    const returndate = ref('');

    const hometowns = ['Riobamba', 'Cuenca', 'Quito', 'Guayaqui', 'Machala'];
    const destinationcities = ['Ambato', 'Latacunga', 'Coca', 'Esmeraldas', 'Manabi'];
    
    return {
        form:{
            hometown,
            destinationcity,
            departuredate,
            returndate
        },
        hometowns,
        destinationcities
    };
  },
};
</script>

<style lang="scss" scoped>
* {
	font-family: 'Raleway', sans-serif;
}

body {
	background: rgb(162,45,238);
	background: linear-gradient(174deg, rgba(162,45,238,1) 0%, rgba(91,112,191,1) 100%);
	color: #786fa4;
	overflow-x: hidden;
	font-size: 14px;
}

.h-100vh {
	height: 100vh !important;
}

.card {
	margin: 2em auto;
	max-width: 700px !important;
	border: none;
	-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

}

@media only screen and (max-width: 767px) {
	body{
		padding-top: 20px;
	}
	.card {
		width: 100%;
	}
}

.custom-control-input:checked~.custom-control-label::before {
	color: #FDFFFC !important;
	border-color: #26A598 !important;
	background-color: #26A598 !important;
}

.text-center {
	color: #FDFFFC !important;
	background-color: #52177A !important;
}

.form-control{
    margin-bottom: 1em;
}

.btn-primary {
	color: #FDFFFC;
	background-color: #8D27D1;
	border-color: #8D27D1;
}

.btn-primary:hover {
	background-color: #a22dee;
	border-color: #a22dee;
}

.card-header.display-4 {
	font-weight: bold;
}
</style>