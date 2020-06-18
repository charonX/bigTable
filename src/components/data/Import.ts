import XLSX from 'xlsx'


const Import = (file:File) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.onload = (e) => {
            let data = e.target && e.target.result
            let workbook = XLSX.read(data, {type: 'binary'})
            resolve(workbook)
        }
        reader.onerror = (e) => {
            reject(e)
        }
        reader.readAsBinaryString(file);
    })
    
}


export default {Import,}