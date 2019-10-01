describe("Bombergame", function() {
  var juego;

  beforeEach(function() {
    juego = new Juego();
  });

  it("comprobaciones iniciales", function() {
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas.length).toEqual(0);
  });


  it("comprobar agregar usuarios", function(){
    juego.agregarUsuario('pepe');
    expect(Object.keys(juego.usuarios).length).toEqual(1);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
  });

  it("comprobar crear partida", function(){
    juego.agregarUsuario('pepe');
    juego.crearPartida('una', 'pepe');
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].jugadores["pepe"]).not.toBe(undefined);
  });

  it("comprobar que ana se puede unir a la partida", function(){
    juego.agregarUsuario('pepe');
    juego.crearPartida('una', 'pepe');
    juego.agregarUsuario('ana');
    juego.unirPartida('unapepe', 'ana');
    expect(Object.keys(juego.usuarios).length).toEqual(2);
    expect(juego.usuarios["ana"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].jugadores["ana"]).not.toBe(undefined);
    expect(Object.keys(juego.partidas["unapepe"].jugadores).length).toEqual(2);

  });

});
