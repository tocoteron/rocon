import type { BuilderLink } from ".";
import type { RouteRecordType } from "../../builder/RouteRecord";

/**
 * State of BuilderLink.
 * - unattached: this link is not attached to a parent.
 * - attached: this link is attached to a parent.
 * - inherited: another link inherited this one.
 */
export type BuilderLinkState<ActionResult, Segment> =
  | {
      state: "unattached";
      parentRoute?: undefined;
      childLink?: BuilderLink<ActionResult, unknown>;
    }
  | {
      state: "attached";
      parentRoute: RouteRecordType<ActionResult, never, boolean>;
      childLink?: BuilderLink<ActionResult, unknown>;
    }
  | {
      state: "inherited";
      parentRoute?: undefined;
      inheritor: BuilderLink<ActionResult, Segment>;
    };
