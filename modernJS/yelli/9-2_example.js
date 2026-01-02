function Cylinder(cylibderDiameter, cylibderHeight) {
    this.diameter = cylibderDiameter;
    this.height = cylibderHeight;

    this.getVolume = function() {
        let radius = this.diameter / 2;
        return (Math.PI * radius * radius * this.height).toFixed(2);
    }
}

let cylinder = new Cylinder(8, 10);
console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다.`);