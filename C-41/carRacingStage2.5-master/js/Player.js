class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }


  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  //read the value of cars at end from the database and give it to the rank of the player 
  getCarsAtEnd(){
    var carsAtEndRef=database.ref('carsAtEnd');
    carsAtEndRef.on("value",(data)=>{
      this.rank=data.val()
    })
  }
//write the value of rankas cars at end in database,as this function is common to all the objects hence static
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd: rank
    });
  }
}
