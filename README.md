# Minimalist Nginx Error Pages

A full set of custom error pages (28&times; HTTP 4xx & 11x&times; HTTP 5xx) for Nginx in a skeek, minimalist and mobile-friendly design. The error pages feature a brief explanation and a button to navigate back.

## Preview

![Example error page](https://i.imgur.com/UhkO7uP.pngg)

## Installation

### 1. Prepare installation (all linux flavors)

```Bash
# Navigate to homedir or any other workspace for an unprivileged user
cd ~

# Get the files
git clone https://github.com/bartosjiri/nginx-errors.git

# Create install directory
sudo mkdir -p /usr/share/nginx/nginx-errors

# Copy files to install directory
sudo cp -r nginx-errors/* /usr/share/nginx/nginx-errors

# Navigate to nginx config dir
cd /etc/nginx/
```

### 2.1. Installation steps for Debian-based systems

For Debian and other Debian-based systems like Ubuntu, the standard is to have global config in `conf.d/` and reusable snippets in `snippets/'. Run the following commands to create symlinks in these locations:

```bash
# Create Debian/Ubuntu-specific symlink to nginx-errors-global.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors-global.conf conf.d/nginx-errors-global.conf

# Create Debian/Ubuntu-specific symlink to nginx-errors.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors.conf snippets/nginx-errors.conf
```

DEB-based nginx packages offer no directory for default virtual host configuration out of the box. Instead, they provide a default configuration template. This and your own configuration are `sites-available/`. Add this to every `server { }` block in these files:

```nginx
include /etc/nginx/snippets/nginx-errors.conf;
```

### 2.2 Installation steps for RHEL-based systems

For Red Hat Enterprise Linux and RHEL-style systems like Fedora, CentOS, Alma Linux, Rocky Linux, etc., the standard is to have global config in `conf.d/` and global vhost defaults in `default.d/`. Run the following commands to create symlinks in these locations:

```bash
# Create RHEL/CentOS/Fedora-specific symlink to nginx-errors-global.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors-global.conf conf.d/nginx-errors-global.conf

# Create RHEL/CentOS/Fedora-specific symlink to nginx-errors.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors.conf default.d/nginx-errors.conf
```

Typically, `default.d/` should already be included in your `server { }` blocks:

```nginx
include /etc/nginx/default.d/*.conf;
```

If your configuration doesn't use `default.d/`, add this to every `server { }` block in your configuration:

```nginx
include /etc/nginx/snippets/default.d/nginx-errors.conf;
```

### 3. Finish installation

Run configuration tests and reload nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Done. Your nginx server should now use the new error pages.