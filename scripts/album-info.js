{
  $("#album-title").text(album.title);
  $("img#album-cover-art").attr("src", album.albumArtUrl);
  var container = $("#song-list");
  var id = 1;
  album.songs.forEach( obj => {
    let tr = $("<tr>");
    tr.html("<th>"+ id +"</th> <th>" + obj.title + "</th><th>" + obj.duration + "</th>");
    container.append(tr);
    id = id +1;
  });

}
