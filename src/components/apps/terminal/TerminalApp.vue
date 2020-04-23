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
        } else if (subcmd in subcmdData) {
          cmdData.ls = subcmdData[subcmd].files;
          cmdData.pwd = `~/Brenda_Zhang/Desktop${subcmdData[subcmd].folder}`;
          if (subcmd === '../' && type === 'desktop') {
            this.echo('zsh: cd: permission denied');
          }
          type = subcmdData[subcmd].type;
        } else {
          this.echo(`cd: no such file or directory: ${subcmd}`);
        }
      } else if (cmd in cmdData) {
        this.echo(cmdData[cmd]);
      } else {
        this.echo(`zsh: command not found: ${command}`);
      }
    }, config);
  }
}
</script>

<template>
  <div class="terminal" />
</template>

<style lang="scss">
  @import "../../../assets/scss/variables-mac";

  .terminal {
    height: 100%;
  }

  .terminal-command span {
    color: #fff !important;
  }

  .cmd-prompt span {
    color: $folder-bright-blue !important;
  }
</style>
