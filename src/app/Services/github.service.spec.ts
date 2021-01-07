import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return single profile', () => {
    const profileInfo = { login: 'bratinkundu', id: 36078208, name: 'Bratin Kundu' };
    const http = TestBed.get(HttpTestingController);
    let profileResponse;

    service.getProfile('bratinkundu').subscribe((res) => {
      profileResponse = res;
    });
    http.expectOne('https://api.github.com/users/bratinkundu').flush(profileInfo);
    expect(profileResponse).toEqual(profileInfo);
  })

  it('should return message for incorrect profile', () => {
    const profileInfo = {"message":"Not Found"};
    const http = TestBed.get(HttpTestingController);
    let profileResponse;

    service.getProfile('bratinkundu5').subscribe((res) => {
      profileResponse = res;
    });
    http.expectOne('https://api.github.com/users/bratinkundu5').flush(profileInfo);
    expect(profileResponse.message).toBe("Not Found");
  })
  
  it('should return list of users',() => {
    var profileResponse;
    const http = TestBed.get(HttpTestingController);
    const profileInfo = {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false
    }
    service.getAll().subscribe((res) => {
      profileResponse = res;
    });
    http.expectOne('https://api.github.com/users/').flush(profileInfo);
    expect(profileResponse).toEqual(profileInfo);
  })


  it('should return undefined due while calling without Auth or Mock',() => {
    var profileResponse;
    const http = TestBed.get(HttpTestingController);
    service.getAll().subscribe((res) => {
      profileResponse = res;
    });
    expect(profileResponse).toBeUndefined();
  })
});
