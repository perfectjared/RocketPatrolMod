class World 
{
    constructor(dataURL) 
    {
        this.dataURL = dataURL
        fetch(dataURL).then(
            (response) => response.json()
        ).then(
            (json) => {
                this.data = json
                this.entities = this.data.entities
                this.components = this.data.components
            }
        )
    }
}