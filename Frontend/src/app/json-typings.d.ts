// ESTO HABILITA LA LECTURA DE json 
declare module "*.json" {
    const value: any;
    export default value;
}