class Car {
    constructor() {
        this.fuel = 0;
        this.distance = 0;
    }
    // Notice here the `move()` method is defined without "prototype chaining", unlike the previous example.
    move() {
        if(this.fuel < 1) {
            throw new RangeError("Fuel tank is depleted")
        }
        this.fuel--
        this.distance += 2
    }
    // `addFuel` also without "prototypal chaining"
    addFuel() {
        if(this.fuel >= 60) {
            throw new RangeError("Fuel tank is full")
        }
        this.fuel++
    }
}

const myCar = new Car();

console.log(myCar.fuel);
let x = 0;
while (x < 50) {
  myCar.addFuel();
  console.log(myCar.fuel);
  x++;
}
myCar.move();
console.log(myCar.fuel);
myCar.addFuel();
myCar.move();



class Computer {
  constructor(cpu){
    this.cpu = cpu;
    this.drives = [];
  };
  addStorage = (drive) => this.drives.push(drive);
  reformat = () => {
    for (let i = 0; i < this.drives.length; i++) {
      this.drives[i].wipe();
    }
  };
};

class Processor {
  constructor(brand, model, power) {
    this.brand = brand;
    this.model = model;
    this.power = power;
  };
  listSpecs = () => `The ${this.brand} ${this.model} produces ${this.power} gHz of processing power.`;
};

class Drive {
  constructor(type, maxSpace) {
    this.type = type;
    this.maxSpace = maxSpace;
    this.spaceRemaining = maxSpace;
    this.diskDriveFiles = [];
  };
  write = (fileDriveData) => {
    this.spaceRemaining = this.spaceRemaining - fileDriveData.size
    this.diskDriveFiles.push(fileDriveData);
  };  
  wipe = () => {
    this.spaceRemaining = this.maxSpace;
    this.diskDriveFiles = [];
  }
};

const cpu = new Processor('intel', 'i5', '3.0');
console.log(cpu.listSpecs());
const hdd1 = new Drive('ssd', 110000);
const hdd2 = new Drive('ssd', 120000);
const hdd3 = new Drive('ssd', 130000);
const hdd4 = new Drive('ssd', 140000);
const hdd5 = new Drive('ssd', 150000);
const comp1 = new Computer(cpu);
comp1.addStorage(hdd1);
comp1.addStorage(hdd2);
comp1.addStorage(hdd3);
comp1.addStorage(hdd4);
comp1.addStorage(hdd5);

for (let i = 0; i < comp1.drives.length; i++) {
  console.log(comp1.drives[i].spaceRemaining);
}
for (let i = 0; i < comp1.drives.length; i++) {
  comp1.drives[i].write({
    size: 4000,
    content: 'stuff'
  })
  console.log(comp1.drives[i].spaceRemaining);
}
comp1.reformat();
for (let i = 0; i < comp1.drives.length; i++) {
  console.log(comp1.drives[i].spaceRemaining);
}
comp1.drives[1].write({
  size: 40000,
  content: 'stuff'
})
console.log(comp1.drives[1].spaceRemaining);
console.log(hdd2.spaceRemaining);
hdd2.wipe();
console.log(hdd2.spaceRemaining);


class Watch {
  constructor(brand, value, movement) {
    this.brand = brand;
    this.value = value;
    this.movement = movement;
  }
}
class LuxuryWatch extends Watch {
  constructor(brand, value, movement, materials) {
    super(brand, value, movement);
    this.materials = materials;
  }
}
class SmartWatch extends Watch {
  constructor(brand, value, movement, operatingSystem) {
    super(brand, value, movement);
    this.operatingSystem = operatingSystem;
  }
}
function findMostExpensiveWatch(watches) {
  let priceComp = 0;
  let highestIndex = 0;
  for (let i = 0; i < watches.length; i++) {
    if (watches[i].value > priceComp) {
      priceComp = watches[i].value;
      highestIndex = i;
    }
  }
  return watches[highestIndex];
}

const watch1 = new SmartWatch('Apple', 500, 'digital', 'watchOS');
const watch2 = new SmartWatch('Samsung', 450, 'digital', 'wearOS');
const watch3 = new LuxuryWatch('Rolex', 25000, 'automatic', ['white gold','platinum'])
const watch4 = new LuxuryWatch('Audemars Piguet', 40000, 'automatic', ['platinum', 'diamonds'])
const watches = [watch1, watch2, watch3, watch4]

console.log(findMostExpensiveWatch(watches));