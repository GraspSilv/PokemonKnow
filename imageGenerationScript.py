from shutil import copyfile

oldImgFolder = 'pokeapi/data/Pokemon_XY_Sprites/'
newImgFolder = 'sprites/'

jsFile = open('sprites.js','w')
jsFile.write('images = {\n')

#grab all the pokemon sprites and move them
for i in range(1,151):
  copyfile(oldImgFolder + str(i) + '.png', newImgFolder + str(i) +'.png' )
  jsFile.write('img' + str(i) + ': "' + newImgFolder + str(i) + '.png",\n')
jsFile.write('img' + str(151) + ': "' + newImgFolder + str(151) + '.png"\n')
jsFile.write('};')
