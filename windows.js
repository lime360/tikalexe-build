import {ProjectorSaWindows} from '@shockpkg/swf-projector';

const projector = new ProjectorSaWindows('build/tikal.exe');

projector.player = 'res/flashplayer_sa.exe';
projector.movieFile = 'res/tikal.swf';
projector.iconFile = 'res/icon.ico';

projector.versionStrings = {
	FileVersion: '1.0.0',
	ProductVersion: '1.0.0',
	CompanyName: 'Brian the Magic Minion',
	FileDescription: 'Up to round 5?',
	LegalCopyright: 'All characters in this fangame belong to Sega and Sonic Team. Projector is made by lime360 and lincensed under MIT License.',
	ProductName: 'TIKAL.EXE',
	OriginalFilename: 'tikal.exe',
	Comments: 'lime360 was here'
};

// if your text editor doesn't support glitchy text stuff, then i am not very sorry
projector.patchWindowTitle = 'Tikal the Echidna in: Ṡ̷͙̻̼̟̚o̵̤̤͈̓̓̎̈́̕͝n̶͉͛̇͒̚͘ȉ̸͓̂̎̊̄̚͝c̸͖̩͍̲̩͇̞͒́̔̐̂̈́̒ the Hedgehog';
projector.removeCodeSignature = true;

await projector.write();