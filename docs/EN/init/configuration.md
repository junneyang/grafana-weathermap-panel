# Configuration
[![](../../screenshots/other/Go-back.png)](README.md)
 
https://www.howtoforge.com/tutorial/how-to-install-prometheus-and-node-exporter-on-centos-8/

### Prerequisites

It is possible to see to follow a metric in an environment

Example : node_cpu{cpu="cpu0",mode="idle"}


- [Prometheus](https://prometheus.io)
- [Node_exporter](https://prometheus.io/docs/guides/node-exporter/)
- [Grafana](grafana.com/)

## Testing Node_exporter

To see the available metrics, open the browser and type this:

```
http://localhost:9100/metrics
```

![Node Exporter](../../screenshots/init/node_exporter.png)


## Testing Prometheus

```
http://localhost:9090/
```

![Prometheus](../../screenshots/init/prometheus.png)


## Testing Grafana

From the `data sources` menu in Grafana, choose Prometheus

Complete the form and the line

url : http://\<ip\>:9090

You have to go to the `New dashboard` menu...

- Select the `graph` display
- Selected the `Queries` tab

Complete the targets to see the result

![metrics graph](../../screenshots/init/graph.png)
