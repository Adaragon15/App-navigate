import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

export const DTable =({cols,info})=>{
    const columnas = cols;
    const data = info;
    
    return(
        <DataTable
        columns={columnas}
        data={data}/>

    )
}
DTable.defaultProps={
    cols:[
        {
        name:'Identificador',
        selector: row=> row.matricula
        },
        {
            name:'Nombre',
            selector: row=> row.nombre
        },
    
        {
            name:'A. Paterno',
            selector: row=> row.paterno
        },        
        {
            name:'A. Materno',
            selector: row=> row.materno
        },
        {
            name:'Telefono',
            selector: row=> row.telefono
        },
        {
            name:'Correo',
            selector: row=> row.correo
        },
    ],
    info:[
        {
            id:1,
            matricula:"Agfjha",
            nombre:"Pedro",
            paterno:"Pascal",
            materno:"Martinez",
            telefono:"111111111",
            correo:"pascalpedro@gmail.com"
        },
        {
            id:2,
            matricula:"An14345",
            nombre:"Ana",
            paterno:"De",
            materno:"Armas",
            telefono:"2222222",
            correo:"anaDeArmas5@gmail.com"
        }
    ]


}