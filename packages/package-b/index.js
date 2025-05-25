let packageA =  require('package-a')
module.exports = () => {
    console.log('Hello from module -b package v3')
    packageA();
}