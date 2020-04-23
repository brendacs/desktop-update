<script>
import $ from 'jquery'
import 'jquery.terminal'
import {cmdData, config, subcmdData} from './utils/constants.js'

export default {
  name: 'TerminalApp',
  mounted() {
    let type = 'desktop';

    $('.terminal').terminal(function(command) {
      let args = command.toLowerCase().split(' ');
      let cmd = args[0];
      let subcmd = args[1] && args[1].toLowerCase();

      if (!cmd) {
        this.echo('');
      } else if (cmd === 'cd') {
        if (!subcmd) {
          this.echo('');
        } else if (Object.keys(subcmdData).includes(subcmd)) {
          cmdData.ls = subcmdData[subcmd].files;
          cmdData.pwd = `~/Brenda_Zhang/Desktop${subcmdData[subcmd].folder}\n`;
          if (subcmd === '../' && type === 'desktop') {
            this.echo('zsh: cd: permission denied\n');
          }
          type = subcmdData[subcmd].type;
        } else {
          this.echo('cd: no such file or directory: ' + subcmd);
        }
      } else if (Object.keys(cmdData).includes(cmd)) {
        this.echo(cmdData[cmd]);
      } else {
        this.echo('zsh: command not found: ' + command);
      }
    }, config);
  }
}
</script>

<template>
  <div class="terminal" />
</template>

<style lang="scss" scoped>
  .terminal {
    height: 100%;
  }
</style>
