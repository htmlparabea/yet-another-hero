import backgrounds_start from "./sprites/backgrounds/start.png";
import heroes_elf_portrait from "./sprites/heroes/elf-portrait.png";
import heroes_knight_portrait from "./sprites/heroes/knight-portrait.png";
import heroes_wizard_portrait from "./sprites/heroes/wizard-portrait.png";

/**
 * Contains the configuration.
 */
export const config = {
    "width": 640,
    "height": 480,
    "font": "press-start.regular.ttf",
    "sprites": {
        "backgrounds": {
            "start": backgrounds_start
        },
        "ui": {
            "heart": {
                "empty": "ui/heart-empty.png",
                "half": "ui/heart-half.png",
                "full": "ui/heart-full.png"
            }
        },
        "floors": [
            "floors/floor-0.png",
            "floors/floor-1.png",
            "floors/floor-2.png",
            "floors/floor-3.png",
            "floors/floor-4.png",
            "floors/floor-5.png",
            "floors/floor-6.png",
            "floors/floor-7.png"
        ],
        "walls": {
            "wall": "walls/wall.png"
        },
        "items": {
            "coin": "items/coin.png",
            "column": "walls/wall.png",
            "hammer": "items/hammer.png",
            "ladder": "items/ladder.png",
            "potion": "items/flask-red-big.png",
            "skull": "items/skull.png"
        },
        "heroes": {
            "knight": {
                "portrait": heroes_knight_portrait,
                "idle": [
                    "heroes/knight_f_idle_anim_f0.png",
                    "heroes/knight_f_idle_anim_f1.png",
                    "heroes/knight_f_idle_anim_f2.png",
                    "heroes/knight_f_idle_anim_f3.png"
                ]
            },
            "elf": {
                "portrait": heroes_elf_portrait,
                "idle": [
                    "heroes/elf_m_idle_anim_f0.png",
                    "heroes/elf_m_idle_anim_f1.png",
                    "heroes/elf_m_idle_anim_f2.png",
                    "heroes/elf_m_idle_anim_f3.png"
                ]
            },
            "wizard": {
                "portrait": heroes_wizard_portrait,
                "idle": [
                    "heroes/wizzard_f_idle_anim_f0.png",
                    "heroes/wizzard_f_idle_anim_f1.png",
                    "heroes/wizzard_f_idle_anim_f2.png",
                    "heroes/wizzard_f_idle_anim_f3.png"
                ]
            },
            "pumpkin": {
                "portrait": heroes_wizard_portrait,
                "idle": [
                    "heroes/pumpkin_dude_idle_anim_f0.png",
                    "heroes/pumpkin_dude_idle_anim_f1.png",
                    "heroes/pumpkin_dude_idle_anim_f2.png",
                    "heroes/pumpkin_dude_idle_anim_f3.png"
                ]
            }
        }
    },
    "heroes": [{
        "id": "knight",
        "name": "Sir Knight",
        "maxLife": 10,
        "life": 8,
        "maxSight": 3,
        "sight": 2
    }, {
        "id": "elf",
        "name": "No name",
        "maxLife": 10,
        "life": 8,
        "maxSight": 3,
        "sight": 2
    }, {
        "id": "wizard",
        "name": "No name",
        "maxLife": 10,
        "life": 8,
        "maxSight": 3,
        "sight": 2
    }, {
        "id": "pumpkin",
        "name": "Mr Pump",
        "maxLife": 8,
        "life": 6,
        "maxsight": 4,
        "sight": 3
    }],
    "board": {
        "cellSize": 32,
        "grid": {
            "rows": 13,
            "cols": 31
        },
        "items": {
            "columns": {
                "rowDensity": 0.5,
                "colDensity": 0.5
            },
            "coins": {
                "density": 20
            },
            "ladders": {
                "density": 6
            },
            "hammers": {
                "density": 0.05,
                "power": 5
            },
            "potions": {
                "density": 0.2,
                "power": 1
            },
            "skulls": {
                "density": 25
            }
        },
        "hero": {
            "row": 11,
            "col": 15,
            "visibility": 3,
            "life": 5,
            "maxLife": 5
        }

    }
};