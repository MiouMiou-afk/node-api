module.exports.signUpErrors = (err) =>{
	let errors= { pseudo: '', email:'', password:''}

	if(err.message.includes('pseudo'))
	errors.pseudo = "Pseudo Incorrect ou déjà pris"

	if(err.message.includes('email'))
	errors.email ='Email incorrect';

	if(err.message.includes('password'))
	errors.password = 'Mot de passe de doit faire plus de 6 caractères'

	if(err.code === 1100 && Object.keys(err.keyValue)[0].includes('pseudo') )
	errors.email = 'Ce pseudo est déjà enregistré'

	if(err.code === 1100 && Object.keys(err.keyValue)[0].includes('email') )
	errors.email = 'Cet email est déjà enregistré'

	return errors 
};

module.exports.signInErrors = (err) =>{
	let errors ={email:'', password:''}
	if(err.message.includes('email'))
	errors.email ='Email inconnu';

	if(err.message.includes('password'))
	errors.password = 'Mot de passe non valide'

	return errors 

}

module.exports.uploadErrors = (err) => {
	let errors = { format: '', maxSize: ""};
   
	if (err.message.includes('invalid file'))
	  errors.format = "Format incompatabile";
   
	if (err.message.includes('max size'))
	  errors.maxSize = "Le fichier dépasse 500ko";
   
	return errors
   }