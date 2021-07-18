<template>
				<div class="card-header text-center display-4">
					Resultados de búsqueda de tickets aéreos
				</div>
				<div class="card-body">
				
					<div v-for="ticket in tickets" :key="ticket.price" class="card border-secondary mb-3" style="max-width: 18rem;">
						<div class="card-header">{{ticket.airline}}</div>
						<div class="card-body text-secondary">
							<p class="card-text"><strong>Precio:</strong> {{ticket.price}}</p>
							<p class="card-text"><strong>Escalas,:</strong> {{ticket.stopover}}</p>
							<p class="card-text"><strong>Duración:</strong> {{ticket.duration}}</p>
						</div>
					</div>
				</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
	computed: {
		...mapState(['tickets'])
	}
}
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