ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "ae2:vibration_chamber",
    ]);
    remove_recipes_id(event, [
        "ae2:network/parts/quartz_fiber_part",
        "ae2:network/cables/glass_fluix",
    ]);
});
