import backgrounds_start from "./sprites/backgrounds/start.png";
import backgrounds_frame from "./sprites/backgrounds/frame.png";
import heroes_elf_portrait from "./sprites/heroes/elf-portrait.png";
import heroes_elf_idle_f0 from "./sprites/heroes/elf-idle-f0.png";
import heroes_elf_idle_f1 from "./sprites/heroes/elf-idle-f1.png";
import heroes_elf_idle_f2 from "./sprites/heroes/elf-idle-f2.png";
import heroes_elf_idle_f3 from "./sprites/heroes/elf-idle-f3.png";
import heroes_elf_run_f0 from "./sprites/heroes/elf-run-f0.png";
import heroes_elf_run_f1 from "./sprites/heroes/elf-run-f1.png";
import heroes_elf_run_f2 from "./sprites/heroes/elf-run-f2.png";
import heroes_elf_run_f3 from "./sprites/heroes/elf-run-f3.png";
import heroes_knight_portrait from "./sprites/heroes/knight-portrait.png";
import heroes_knight_idle_f0 from "./sprites/heroes/knight-idle-f0.png";
import heroes_knight_idle_f1 from "./sprites/heroes/knight-idle-f1.png";
import heroes_knight_idle_f2 from "./sprites/heroes/knight-idle-f2.png";
import heroes_knight_idle_f3 from "./sprites/heroes/knight-idle-f3.png";
import heroes_knight_run_f0 from "./sprites/heroes/knight-run-f0.png";
import heroes_knight_run_f1 from "./sprites/heroes/knight-run-f1.png";
import heroes_knight_run_f2 from "./sprites/heroes/knight-run-f2.png";
import heroes_knight_run_f3 from "./sprites/heroes/knight-run-f3.png";
import heroes_wizard_portrait from "./sprites/heroes/wizard-2-portrait.png";
import heroes_wizard_idle_f0 from "./sprites/heroes/wizard-idle-f0.png";
import heroes_wizard_idle_f1 from "./sprites/heroes/wizard-idle-f1.png";
import heroes_wizard_idle_f2 from "./sprites/heroes/wizard-idle-f2.png";
import heroes_wizard_idle_f3 from "./sprites/heroes/wizard-idle-f3.png";
import heroes_wizard_run_f0 from "./sprites/heroes/wizard-run-f0.png";
import heroes_wizard_run_f1 from "./sprites/heroes/wizard-run-f1.png";
import heroes_wizard_run_f2 from "./sprites/heroes/wizard-run-f2.png";
import heroes_wizard_run_f3 from "./sprites/heroes/wizard-run-f3.png";
import heroes_pumpkin_portrait from "./sprites/heroes/pumpkin-portrait.png";
import heroes_pumpkin_idle_f0 from "./sprites/heroes/pumpkin-idle-f0.png";
import heroes_pumpkin_idle_f1 from "./sprites/heroes/pumpkin-idle-f1.png";
import heroes_pumpkin_idle_f2 from "./sprites/heroes/pumpkin-idle-f2.png";
import heroes_pumpkin_idle_f3 from "./sprites/heroes/pumpkin-idle-f3.png";
import heroes_pumpkin_run_f0 from "./sprites/heroes/pumpkin-run-f0.png";
import heroes_pumpkin_run_f1 from "./sprites/heroes/pumpkin-run-f1.png";
import heroes_pumpkin_run_f2 from "./sprites/heroes/pumpkin-run-f2.png";
import heroes_pumpkin_run_f3 from "./sprites/heroes/pumpkin-run-f3.png";

/**
 * Contains the configuration.
 */
export const config = {
    "width": 640,
    "height": 480,
    "font": "press-start.regular.ttf",
    "sprites": {
        "backgrounds": {
            "start": backgrounds_start,
            "frame": backgrounds_frame
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
                    heroes_knight_idle_f0,
                    heroes_knight_idle_f1,
                    heroes_knight_idle_f2,
                    heroes_knight_idle_f3
                ],
                "run": [
                    heroes_knight_run_f0,
                    heroes_knight_run_f1,
                    heroes_knight_run_f2,
                    heroes_knight_run_f3
                ]
            },
            "elf": {
                "portrait": heroes_elf_portrait,
                "idle": [
                    heroes_elf_idle_f0,
                    heroes_elf_idle_f1,
                    heroes_elf_idle_f2,
                    heroes_elf_idle_f3
                ],
                "run": [
                    heroes_elf_run_f0,
                    heroes_elf_run_f1,
                    heroes_elf_run_f2,
                    heroes_elf_run_f3
                ]
            },
            "wizard": {
                "portrait": heroes_wizard_portrait,
                "idle": [
                    heroes_wizard_idle_f0,
                    heroes_wizard_idle_f1,
                    heroes_wizard_idle_f2,
                    heroes_wizard_idle_f3
                ],
                "run": [
                    heroes_wizard_run_f0,
                    heroes_wizard_run_f1,
                    heroes_wizard_run_f2,
                    heroes_wizard_run_f3
                ]
            },
            "pumpkin": {
                "portrait": heroes_pumpkin_portrait,
                "idle": [
                    heroes_pumpkin_idle_f0,
                    heroes_pumpkin_idle_f1,
                    heroes_pumpkin_idle_f2,
                    heroes_pumpkin_idle_f3
                ],
                "run": [
                    heroes_pumpkin_run_f0,
                    heroes_pumpkin_run_f1,
                    heroes_pumpkin_run_f2,
                    heroes_pumpkin_run_f3
                ]
            }
        }
    },
    "heroes": [{
        "id": "knight",
        "name": "Olivia", // Más fuerte y meno ágil.
        "maxLife": 10,
        "life": 8,
        "maxSight": 3,
        "sight": 2
    }, {
        "id": "elf",
        "name": "Sofía", // Más ágil y menos fuerza.
        "maxLife": 10,
        "life": 8,
        "maxSight": 3,
        "sight": 2
    }, {
        "id": "wizard", // Mucha vista y menos energía.
        "name": "Amelia",
        "maxLife": 10,
        "life": 8,
        "maxSight": 3,
        "sight": 2
    }, {
        "id": "pumpkin", // Todo a medias.
        "name": "Gustavo",
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