
function Juego(){
	this.partidas=[];
	this.usuarios=[];

	this.crearPartida=function(nombre,nick){
		var idp=nombre+nick; //id de la partida
		if (this.partidas[idp]==null){
			this.partidas[idp]=new Partida(nombre, idp);
			this.partidas[idp].agregarJugador(this.usuarios[nick]);
		}
	}
	this.agregarUsuario=function(nombre){
		if (this.usuarios[nombre]==null){	//Comprueba que el usuario no existe
			this.usuarios[nombre]= new Usuario(nombre);
		}
	}
	this.unirPartida=function(idp, nick){
		if (this.partidas[idp]!=null){		//Comprueba que la partida existe
			this.partidas[idp].agregarJugador(this.usuarios[nick]);
		}
	}
	this.obtenerPartidas=function(){
		return this.partidas;
	}

	
}

function Partida(nombre,idp){
	this.nombre=nombre;
	this.idp=idp;		
	this.jugadores=[];
	this.agregarJugador=function(usr){
		this.jugadores[usr.nick]=usr;
	}
}

function Usuario(nick){
	this.nick=nick;
	this.id=undefined;
}