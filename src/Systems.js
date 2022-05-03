class Systems {
    static loadImages = function(entities, scene)
    {
        entities.forEach((entity) =>
        {
            if (entity.key && entity.url) 
            {
                if (entity.config) scene.load.spritesheet(entity.key, entity.url, entity.config) //load spritesheet
                else scene.load.image(entity.key, entity.url) // load images/tile sprites
            }

        })
    }

    static setBackground = function(entities, scene)
    {
        for (let entity in entities)
        {
            let tileSprite = entity["tileSprite"]
            if (tileSprite)
                scene.background = scene.add.tileSprite(tileSprite.x, tileSprite.y, tileSprite.width, tileSprite.height, entity.image).setOrigin(tileSprite.x, tileSprite.y)
        }
    }
}