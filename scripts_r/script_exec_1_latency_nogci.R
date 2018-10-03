# Load the package required to read JSON files. Run install.packages('jsonlite')
library("jsonlite")

# latency data
myData <- read.csv("stateless_results/stateless/al_nogci_nodejs_1.csv", header=FALSE, sep=";", as.is=TRUE)
# json data all machines
jsonData <- fromJSON("stateless_results/stateless/exec_machine_1_all.json")

# final plot
par(mar = c(5, 5, 3, 5))
plot(myData[0:9600,3], type ="l", ylab = "latency (s)",
     main = "Latency x Pause GC", xlab = "distribution",
     col = "blue")
par(new = TRUE)
plot(jsonData$data$pause, type = "l", xaxt = "n", yaxt = "n",
     ylab = "", xlab = "", col = "red", lty = 2)
axis(side = 4)
mtext("time pause GC", side = 4, line = 3)
legend("topleft", c("latency", "pause GC"),
       col = c("blue", "red"), lty = c(1, 2))

#Correlacao
cor(sample(myData[,3], length(jsonData$data$pause)), jsonData$data$pause)