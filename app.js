new Vue({
	el: '#vue-app',
	data:{
		Title: 'Please fill in your address',
		errors:[],
		streetaddress: null,
		city: null,
		state:null,
		zipcode:null
	},
	methods:{
		checkForm:function(e){
			if(this.streetaddress && this.city && this.zipcode && this.state){
				return true;
			}

			this.errors=[];

			if(!this.streetaddress){
				this.errors.push('Street Address is required');
			}
            else if(!this.city){
				this.errors.push('City is required');
			}
			else if(!this.state){
                this.errors.push('State is required');
			}
			else if(!this.zipcode){
				this.errors.push('Zipcode is required');
			}

			e.preventDefault();
		}
	}
	
})