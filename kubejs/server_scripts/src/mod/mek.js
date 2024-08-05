ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "mekanismgenerators:heat_generator",
        "mekanism:steel_casing",
        "mekanism:metallurgic_infuser",
        "mekanism:energized_smelter",
    ]);

    event.shaped("mekanism:steel_casing", [
        "SES",
        "OCO",
        "SES",
    ], {
        S: "#c:ingots/steel",
        E: "powah:steel_energized",
        O: "#c:ingots/osmium",
        C: "powah:dielectric_casing",
    });
    event.shaped("mekanism:metallurgic_infuser", [
        "OEO",
        "CSC",
        "OEO",
    ], {
        O: "#c:ingots/osmium",
        E: "powah:steel_energized",
        C: "powah:capacitor_hardened",
        S: "mekanism:steel_casing",
    });
    event.shaped("mekanism:energized_smelter", [
        "OEO",
        "ESE",
        "OCO",
    ], {
        O: "#c:ingots/osmium",
        E: "powah:steel_energized",
        C: "powah:capacitor_hardened",
        S: "mekanism:steel_casing",
    });
});
