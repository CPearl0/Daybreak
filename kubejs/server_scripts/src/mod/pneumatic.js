ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "pneumaticcraft:air_compressor",
        "pneumaticcraft:advanced_air_compressor",
        "pneumaticcraft:amadron_tablet",
    ]);
    remove_recipes_type(event, ["pneumaticcraft:amadron"]);

    event.shaped("pneumaticcraft:air_compressor", [
        "BBB",
        "BWP",
        "BFB",
    ], {
        B: "pneumaticcraft:reinforced_bricks",
        W: "minecraft:wind_charge",
        P: "pneumaticcraft:pressure_tube",
        F: "minecraft:furnace",
    });
    event.shaped("pneumaticcraft:advanced_air_compressor", [
        "BBB",
        "BWP",
        "BCB",
    ], {
        B: "pneumaticcraft:reinforced_bricks",
        W: "minecraft:wind_charge",
        P: "pneumaticcraft:advanced_pressure_tube",
        C: "pneumaticcraft:air_compressor",
    });
});
