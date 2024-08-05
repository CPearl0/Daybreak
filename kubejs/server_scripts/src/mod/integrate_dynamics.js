ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "integrateddynamics:coal_generator",
        "integrateddynamics:mechanical_squeezer",
        "integrateddynamics:mechanical_drying_basin",
    ]);

    event.shaped("integrateddynamics:mechanical_squeezer", [
        "PGP",
        "CDC",
        "ESE",
    ], {
        P: "powah:dielectric_paste",
        G: "#c:gems/diamond",
        C: "powah:capacitor_hardened",
        D: "powah:dielectric_casing",
        E: "powah:steel_energized",
        S: "integrateddynamics:squeezer",
    });
    event.shaped("integrateddynamics:mechanical_drying_basin", [
        "P P",
        "CDC",
        "ESE",
    ], {
        P: "powah:dielectric_paste",
        C: "powah:capacitor_hardened",
        D: "powah:dielectric_casing",
        E: "powah:steel_energized",
        S: "integrateddynamics:drying_basin",
    });
});
