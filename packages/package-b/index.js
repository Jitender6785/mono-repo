let packageA =  require('package-a')
module.exports = () => {
    console.log('Hello from module -a')
    packageA();
}