<template>
	<form class="mt-5">
		<input id="input-1" v-model="skills" type="text" placeholder="Cooking, Negotiation, Woodwork" required autofocus />
		<label for="input-1">
			<span class="label-text">Current Skills (Separate with commas, up to six)</span>
			<span class="nav-dot"></span>
		</label>
		<input id="input-2" v-model="interests" type="text" placeholder="Programming, Investing, Photographer" required />
		<label for="input-2">
			<span class="label-text">Interests and Aspirations (Separate with commas, up to six)</span>
			<span class="nav-dot"></span>
		</label>
		<input id="input-3" v-model="city" type="text" placeholder="Houston" required />
		<label for="input-3">
			<span class="label-text">City</span>
			<span class="nav-dot"></span>
		</label>
		<input id="input-4" v-model="state" type="text" placeholder="Texas" required />
		<label for="input-4">
			<span class="label-text">State</span>
			<span class="nav-dot"></span>
		</label>
		<input id="input-5" type="button" value="Press To Finish" v-on:click="uploadInformation" />
		<label for="input-5">
			<span class="label-text">All Set!</span>
			<span class="nav-dot"></span>
		</label>
		<p class="tip">Press Tab</p>
	</form>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Onboarding',
	data() {
		return {
			skills: '',
			interests: '',
			city: '',
			state: ''
		}
	},
	methods: {
		uploadInformation() {
			if(this.skills.length > 0 && this.interests.length > 0 && this.city.length > 0 && this.state.length > 0) {
				let skillsArr = this.skills.split(',')
				let interestsArr = this.interests.split(',')
				axios({
					method: 'post',
					url: 'http://localhost:3000/api/v1/users/onboard',
					headers: {
						'Authorization': 'Bearer ' + this.$cookies.get('token')
					},
					data: {
						skills: skillsArr,
						interests: interestsArr,
						location: this.city + ', ' + this.state
					}
				}).then( () => {
					this.$router.push('skills')
				})
			}
		}
	}
}
</script>

<style scoped>
input {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -300%);
	display: block;
	width: 70vw;
	opacity: 0;
	pointer-events: none;
	transition: all 0.5s cubic-bezier(0.4, 0.25, 0.8, 0.3);
}
input {
	padding: 0.25rem 0;
	border: 0;
	border-bottom: 1px solid #ffb101;
	outline: 0;
	background: transparent;
	color: #2a2a2a;
	font-size: 3rem;
	line-height: 4rem;
	letter-spacing: 0.125rem;
	transition: all 0.5s cubic-bezier(0.4, 0.25, 0.8, 0.3);
}
input::selection {
	background: #ffb101;
}

input:focus {
	opacity: 1;
	transform: translate(-50%, -100%);
	pointer-events: auto;
	transition: all 0.4s cubic-bezier(0.1, 0.45, 0.1, 0.85) 0.5s;
	z-index: 10;
}
input:focus ~ input {
	transform: translate(-50%, 500%);
	transition: all 0.5s ease-in;
}
input:focus ~ label .label-text {
	transform: translate(-50%, 300%);
	transition: all 0.5s ease-in;
}
input:focus ~ .tip {
	opacity: 1;
}

input:focus + label .label-text {
	opacity: 1;
	transform: translate(-50%, -100%);
	transition: all 0.3s cubic-bezier(0.1, 0.45, 0.1, 0.85) 0.4s;
}
input:focus + label .nav-dot:before {
	background: #ffb101;
	box-shadow: 0 0 0 0.15rem #111, 0 0 0.05rem 0.26rem #2a2a2a;
}
.tip {
	position: fixed;
	top: 57%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70%;
	opacity: 0;
	color: #2a2a2a;
	font-size: 0.875rem;
	font-weight: 300;
	letter-spacing: 0.125rem;
	text-transform: uppercase;
	text-align: right;
	transition: opacity 0.25s 0.5s;
}

.label-text {
	position: fixed;
	top: calc(50% - 4rem);
	left: 50%;
	transform: translate(-50%, -300%);
	width: 70vw;
	padding: 3.125rem 0 1.5rem;
	text-transform: uppercase;
	color: #2a2a2a;
	opacity: 0;
	font-size: 1.125rem;
	font-weight: 300;
	letter-spacing: 0.125rem;
	pointer-events: none;
	transition: all 0.4s cubic-bezier(0.4, 0.25, 0.8, 0.3) 0.05s;
}
.nav-dot {
	cursor: pointer;
	position: fixed;
	padding: 0.625rem 1.25rem 0.625rem 0.625rem;
	top: 52%;
	right: 1.25rem;
}
.nav-dot:before {
	content: '';
	display: inline-block;
	border-radius: 50%;
	width: 0.375rem;
	height: 0.375rem;
	margin-right: 0.625rem;
	position: fixed;
	background-color: #16272f;
	border: 0;
	transition: all 0.25s;
}
.nav-dot:hover:before {
	width: 0.625rem;
	height: 0.625rem;
	margin-top: -0.125rem;
	margin-left: -0.125rem;
	background-color: #ffb101;
}
label[for="input-1"] .nav-dot {
	margin-top: -125px;
}
label[for="input-2"] .nav-dot {
	margin-top: -100px;
}
label[for="input-3"] .nav-dot {
	margin-top: -75px;
}
label[for="input-4"] .nav-dot {
	margin-top: -50px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html, body {
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to bottom right, #111e25 0%, #111 100%);
	font-family: 'Lato', sans-serif;
}
form {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
 
</style>