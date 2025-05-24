let packageB =  require('package-b')
module.exports = () => {
    console.log('Hello from module -c')
    packageB();
}