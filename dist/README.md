# WeatherMap

Inspired by the [WeatherMap plugin for Cacti](https://www.network-weathermap.com/), WeatherMap Panel Plugin for Grafana.

Compatibility with  Prometheus

This project is still in development.

# Installation

* Weathermap requires [Grafana](https://www.grafana.com/) v6.6+ to run (not tested lower version). Download and install it first.

## Dependencies

- Grafana 6.6.x or 6.7.x
- Yarn 1.21.1


## Official version

Go to [weathermap-panel](https://grafana.com/plugins/grafana-weathermap-panel) official page and click on "install Plugin".


## Automatic

```sh
grafana-cli plugins install grafana-weathermap-panel
```

## Manual

```sh
$ git clone https://github.com/atosorigin/grafana-weathermap
```

move the folder to grafana's plugins folder

```sh
$ mv grafana-weathermap /var/lib/grafana/plugins
```

Install the plugins

```sh
$ cd /var/lib/grafana/plugins
$ cd grafana-weathermap
$ yarn install
$ yarn watch
$ systemctl restart grafana-server
```

This will run linting tools and applu prettier Fix

To build the plugin run :

```sh
$ yarn build
```



# Getting Help

* [WeatherMap documentation](https://github.com/atosorigin/grafana-weathermap/tree/master/docs)

* [WeatherMap Demo](https://github.com/atosorigin/grafana-weathermap-panel/tree/master/demo)


# History

* [Changelog](https://github.com/atosorigin/grafana-weathermap/blob/master/CHANGELOG.md)