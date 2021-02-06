# xr.berkeley.edu

## Maintainers
When you push, only this GitHub repository will be updated. To modify the live website, you will also have to pull the changes from within OCF, our hosting platform.

```
ssh vrab@ssh.ocf.berkeley.edu
cd public_html
git pull origin master
```

You may want to also copy your public SSH key over `.ssh/authorized_keys` the first time you login, to make subsequent logins faster.
Advanced users may also want to look at SSHFS, which allows making changes directly to the live website. For a tutorial: [https://wiki.archlinux.org/index.php/SSHFS](https://wiki.archlinux.org/index.php/SSHFS)


## Structure
`index.html` The main page. <br>
`images/` Images used by the main page. <br>
`assets/css` Stylesheets shared by all pages. <br>
`assets/fonts` Fonts shared by all pages. <br>
`assets/footer.html` The footer to add at the bottom of every page. <br>
`decal/` The XR DeCal website.

## Using the Footer
You may easily add the footer containing the disclaimer and links to our social media on every new page you create, by simply inserting at its bottom:
```
<iframe id="iframe_footer" src="assets/footer.html" scrolling="no"></iframe>
```

## Suggestions
If adding media content (such as photos), make sure it's smaller than 500 KB. Larger sizes take significant time to download, and may not be accessible to people with poor internet connection. In a similar fashion, keep the website as JavaScript-free as possible. JS also increases complexity a lot, and may make the website unmaintainable given the limited time we have in a semester. Right now, the website only uses HTML and CSS.

## Copying
All assets are released under Creative Commons Attribution 3.0 Unported, unless otherwise stated inside the respective file.
