from flask import render_template, redirect, url_for, request
from generate_all import *
from dndlerapp import app
import random

@app.route('/')
@app.route('/dndl/')
def dndl():
    character = generate_all(random.randint(1,5), weighted=True)
    spellcasting_class, spellcasting_ability, spell_save_dc, spell_atk_bonus = get_spellcaster_details(character)
    return render_template('dndl.html',
                            character = character,
                            spellcasting_class = spellcasting_class,
                            spellcasting_ability = spellcasting_ability,
                            spell_save_dc = spell_save_dc,
                            spell_atk_bonus = spell_atk_bonus)
