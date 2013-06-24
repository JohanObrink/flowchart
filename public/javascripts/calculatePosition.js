var calculatePosition = (function() {

  var blocked = {};
  var direction = 1;

  var calculatePosition = function(graph) {
    return graph;
  };

  var calculateNodePosition = function(graph, node, direction, index) {
    var children = graph.filter(function(n) {
      return c.parent === node.id;
    });
  };

  return calculatePosition;
})();