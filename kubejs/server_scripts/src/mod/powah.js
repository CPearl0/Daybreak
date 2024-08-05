ServerEvents.recipes(event => {
    remove_recipes_output(event, [

    ]);

    event.replaceInput({ id: "powah:crafting/energizing_rod_starter" },
        "minecraft:quartz",
        "#ae2:all_quartz"
    );
});
