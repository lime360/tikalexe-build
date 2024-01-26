import {ProjectorSaLinux} from '@shockpkg/swf-projector';

const projector = new ProjectorSaLinux('build/tikal');

projector.player = 'res/flashplayer_sa.tar.gz';
projector.movieFile = 'res/tikal.swf';

// if your text editor doesn't support glitchy text stuff, then i am not very sorry
projector.patchWindowTitle = 'Tikal the Echidna in: Ṡ̷͙̻̼̟̚o̵̤̤͈̓̓̎̈́̕͝n̶͉͛̇͒̚͘ȉ̸͓̂̎̊̄̚͝c̸͖̩͍̲̩͇̞͒́̔̐̂̈́̒ the Hedgehog';
projector.patchProjectorPath = true;
projector.patchProjectorOffset = true;

await projector.write();