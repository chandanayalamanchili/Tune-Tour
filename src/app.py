from flask import Flask, render_template, request, g
import sqlite3

app = Flask(__name__)
DATABASE = 'myplaylist.db'

# create the "playlist" table if it doesn't exist
def init_db():
    with app.app_context():
        db = get_db()
        db.execute('CREATE TABLE IF NOT EXISTS playlist (id INTEGER PRIMARY KEY AUTOINCREMENT, song_name TEXT)')
        db.commit()

# get a new SQLite connection
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

# close the SQLite connection at the end of each request
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

# handle POST requests to /add-song
@app.route('/add-song', methods=['POST'])
def add_song():
    # get the song name from the AJAX request
    song_name = request.form['songName']

    try:
        # check if song is already in the database
        db = get_db()
        song_count = db.execute('SELECT COUNT(*) FROM playlist WHERE song_name = ?', [song_name]).fetchone()[0]
        if song_count > 0:
            return 'Error', 500

        # insert the song name into the database
        db.execute('INSERT INTO playlist (song_name) VALUES (?)', [song_name])
        db.commit()

        # send a success response to the client
        return 'Success', 200

    except Exception as e:
        # if an error occurs, rollback the transaction and send an error response to the client
        db.rollback()
        print('Error:', e)
        return 'Error', 500


@app.route('/playlist')
def playlist():
    try:
        db = get_db()
        songs = db.execute('SELECT song_name FROM playlist').fetchall()
        return render_template('playlist.html', songs=songs)

    except Exception as e:
        print('Error:', e)
        return 'Error', 500

@app.route('/remove-song', methods=['POST'])
def remove_song():
    try:
        song_id = request.form['songId']
        print(song_id) # check the value of song_id
        db = get_db()
        db.execute('DELETE FROM playlist WHERE song_name = ?', [song_id])
        db.commit()
        return 'Success', 200
    except sqlite3.Error as e:
        print('SQLite error:', e.args[0])
        db.rollback()
        return 'Error', 500
    except Exception as e:
        print('Error:', e)
        db.rollback()
        return 'Error', 500
@app.route('/')
def home1():
    return render_template('home.html')
@app.route('/home.html')
def home():
    return render_template('home.html')
@app.route('/About_page.html')
def about():
    return render_template('About_page.html')
@app.route('/playlist.html')
def playlistpage():   
    return render_template('playlist.html')
@app.route('/agnathavasi.html')
def agnathavasi():   
     return render_template('agnathavasi.html') 
@app.route('/amittrivedialbum.html')
def amit():
    return render_template('amittrivedialbum.html')    
@app.route('/andhadhun.html')
def andhadhun():
    return render_template('andhadhun.html')  
@app.route('/anirudh.html')
def anirudh():
    return render_template('anirudh.html') 
@app.route('/anuprubens.html')
def anup():
    return render_template('anuprubens.html') 
@app.route('/artists.html')
def artist():
    return render_template('artists.html')     

@app.route('/avsr.html')
def avsr():
    return render_template('avsr.html') 
@app.route('/baadshah.html')
def baadshah():
    return render_template('baadshah.html')     
@app.route('/badhaido.html')
def badhaido():
    return render_template('badhaido.html') 
@app.route('/bahubali.html')
def bahubali():
    return render_template('bahubali.html')  
@app.route('/brindhavanam.html')
def brindhavanam():
    return render_template('brindhavanam.html') 
@app.route('/dhalapathi.html')
def dhalapathi():
    return render_template('dhalapathi.html')   
@app.route('/dsp.html')
def dsp():
    return render_template('dsp.html')   
@app.route('/evade.html')
def evade():
    return render_template('evade.html')   
@app.route('/geethanjali.html')
def geethanjali():
    return render_template('geethanjali.html')
@app.route('/gundellogodhari.html')
def gundellogodhari():
    return render_template('gundellogodhari.html')    
@app.route('/ilayaraja.html')
def ilayaraja():
    return render_template('ilayaraja.html') 
@app.route('/jersy.html')
def jersy():
    return render_template('jersy.html')   
@app.route('/kaithi.html')
def kaithi():
    return render_template('kaithi.html')       
@app.route('/keeravani.html')
def keeravani():
    return render_template('keeravani.html')  
@app.route('/lootera.html')
def lootera():
    return render_template('lootera.html')   
@app.route('/magadheera.html')
def magadheera():
    return render_template('magadheera.html') 
@app.route('/maharshi.html')
def maharshi():
    return render_template('maharshi.html')    
@app.route('/manam.html')
def manam():
    return render_template('manam.html')     
@app.route('/na.html')
def na():
    return render_template('na.html')   
@app.route('/nannaku.html')
def nannaku():
    return render_template('nannaku.html')   
@app.route('/nenulocal.html')
def nenulocal():
    return render_template('nenulocal.html')    
@app.route('/nrnm.html')
def nrnm():
    return render_template('nrnm.html')   
@app.route('/okb.html')
def okb():
    return render_template('okb.html')   
@app.route('/padman.html')
def padman():
    return render_template('padman.html')     
@app.route('/paisavasool.html')
def paisavasool():
    return render_template('paisavasool.html')   
@app.route('/ps1.html')
def ps1():
    return render_template('ps1.html')    
@app.route('/pushpa.html')
def pushpa():
    return render_template('pushpa.html')      
@app.route('/rabhasa.html')
def rabhasa():
    return render_template('rabhasa.html')   
@app.route('/rahmanalbum.html')
def rahman():
    return render_template('rahmanalbum.html') 
@app.route('/ramayya.html')
def ramayya():
    return render_template('ramayya.html')   
@app.route('/robo.html')
def robo():
    return render_template('robo.html')  
@app.route('/rrkk.html')
def rrkk():
    return render_template('rrkk.html')    
@app.route('/rrr.html')
def rrr():
    return render_template('rrr.html')   
@app.route('/search_page.html')
def search_page():
    return render_template('search_page.html') 
@app.route('/soggade.html')
def soggade():
    return render_template('soggade.html')    
@app.route('/sos.html')
def sos():
    return render_template('sos.html')    
@app.route('/spotlight.html')
def spotlight():
    return render_template('spotlight.html')     
@app.route('/srr.html')
def srr():
    return render_template('srr.html')    
@app.route('/temper.html')
def temper():
    return render_template('temper.html')    
@app.route('/thaman.html')
def thaman():
    return render_template('thaman.html')  
@app.route('/udta.html')
def udta():
    return render_template('udta.html')  
@app.route('/vikram.html')
def vikram():
    return render_template('vikram.html')       
@app.route('/villain.html')
def villain():
    return render_template('villain.html')   
@app.route('/vip.html')
def vip():
    return render_template('vip.html')    
@app.route('/ymc.html')
def ymc():
    return render_template('ymc.html')

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
