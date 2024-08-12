# Move by word

I'm very used to emacs-style bindings for char- and word-based navigation in those applications that do not support vim mode or are awkward to use vim mode with. Obsidian, like many other apps, has partial support for these; basically shortcuts with `control` key work and those with `option` do not.

So I wrote this simple plugin to make word-based navigation configurable. The plugin adds the following commands:

- Move word forward
- Move word backward
- Delete word forward

That's basically all of it.

# Installation

These steps are for macOS. Didn't test it on other systems, so please follow plugin installation guide for your system.

First, clone and build the code:

```shell
cd /path/to/your/vault/.obisidian/plugins
git clone https://github.com/sinefabula/move-by-word
cd move-by-word
npm install
npm run build
```

Then, enable Community plugins in Obisidan if you haven't already: Settings > Community plugins > Enable. Restart Obsidian. Go to Settings > Community plugins. You should see Move by Word in the 'Installed plugins' list. Enable it.

# Configuration

After successful installation, new hotkeys become available. Go to Settings > Hotkeys and filter by 'Move by Word'. You should see the new commands ready to be mapped.
